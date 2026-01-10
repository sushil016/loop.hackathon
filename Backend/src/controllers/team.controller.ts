import { Request, Response } from 'express';
import csvProcessingService from '../services/sync/csv-processing.service';
import teamService from '../services/team.service';
import communicationService from '../services/communication/email.service';
import { prisma } from '../lib/prisma';
import fs from 'fs';

export class TeamController {
  /**
   * Upload and process CSV file
   */
  async uploadCSV(req: Request, res: Response): Promise<void> {
    try {
      if (!req.file) {
        res.status(400).json({ error: 'No CSV file uploaded' });
        return;
      }

      // Create sync job
      const syncJob = await prisma.syncJob.create({
        data: {
          jobType: 'registration_sync',
          status: 'RUNNING',
        },
      });

      console.log(`🔄 Starting CSV import (Job ID: ${syncJob.id})...`);

      // Parse CSV
      const rows = await csvProcessingService.parseCSV(req.file.path);
      console.log(`📄 Parsed ${rows.length} rows from CSV`);

      // Normalize data
      const teams = csvProcessingService.normalizeTeamData(rows);
      console.log(`👥 Normalized ${teams.length} teams`);

      // Import into database
      const result = await csvProcessingService.importTeams(teams, syncJob.id);

      // Delete uploaded file
      fs.unlinkSync(req.file.path);

      res.json({
        success: true,
        message: 'CSV processed successfully',
        jobId: syncJob.id,
        stats: {
          totalTeams: teams.length,
          newTeams: result.newTeams,
          updatedTeams: result.updatedTeams,
          errors: result.errors.length,
        },
        errors: result.errors,
      });
    } catch (error) {
      console.error('❌ CSV upload failed:', error);
      res.status(500).json({
        error: 'Failed to process CSV',
        message: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  /**
   * Get verified teams list
   */
  async getVerifiedTeams(_req: Request, res: Response): Promise<void> {
    try {
      const teams = await teamService.getVerifiedTeamsWithLeaders();
      res.json({
        success: true,
        count: teams.length,
        teams,
      });
    } catch (error) {
      res.status(500).json({
        error: 'Failed to fetch verified teams',
        message: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  /**
   * Get unverified teams list
   */
  async getUnverifiedTeams(_req: Request, res: Response): Promise<void> {
    try {
      const leaders = await teamService.getUnverifiedLeaderContacts();
      res.json({
        success: true,
        count: leaders.length,
        teams: leaders,
      });
    } catch (error) {
      res.status(500).json({
        error: 'Failed to fetch unverified teams',
        message: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  /**
   * Get unverified team phone numbers for calling
   */
  async getUnverifiedPhoneNumbers(_req: Request, res: Response): Promise<void> {
    try {
      const phoneNumbers = await teamService.getUnverifiedPhoneNumbers();
      
      res.json({
        success: true,
        count: phoneNumbers.length,
        phoneNumbers,
        callFeature: {
          description: 'Copy phone numbers to your calling app',
          format: 'tel:' + phoneNumbers[0],
          bulkCallLink: `tel:${phoneNumbers.join(',')}`, // May not work on all platforms
        },
      });
    } catch (error) {
      res.status(500).json({
        error: 'Failed to fetch phone numbers',
        message: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  /**
   * Get all unverified contacts (leaders + members)
   */
  async getUnverifiedAllContacts(_req: Request, res: Response): Promise<void> {
    try {
      const contacts = await teamService.getUnverifiedAllContacts();
      
      res.json({
        success: true,
        count: contacts.length,
        contacts,
      });
    } catch (error) {
      res.status(500).json({
        error: 'Failed to fetch contacts',
        message: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  /**
   * Send bulk verification reminder emails
   */
  async sendVerificationReminders(_req: Request, res: Response): Promise<void> {
    try {
      console.log('📧 Starting bulk verification reminders...');
      
      const result = await communicationService.sendVerificationReminderBulk();
      
      res.json({
        success: true,
        message: 'Verification reminders sent',
        stats: {
          sent: result.sent,
          failed: result.failed,
          total: result.sent + result.failed,
        },
      });
    } catch (error) {
      res.status(500).json({
        error: 'Failed to send verification reminders',
        message: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  /**
   * Export teams to CSV
   */
  async exportTeams(req: Request, res: Response): Promise<void> {
    try {
      const { status } = req.query;
      
      const csvData = await teamService.exportTeamsToCSV({
        verificationStatus: status as 'PENDING' | 'VERIFIED' | 'REJECTED' | undefined,
      });

      res.setHeader('Content-Type', 'text/csv');
      res.setHeader(
        'Content-Disposition',
        `attachment; filename="teams_${status || 'all'}_${Date.now()}.csv"`
      );
      res.send(csvData);
    } catch (error) {
      res.status(500).json({
        error: 'Failed to export teams',
        message: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  /**
   * Get team statistics
   */
  async getTeamStats(_req: Request, res: Response): Promise<void> {
    try {
      const stats = await teamService.getTeamStats();
      res.json({
        success: true,
        stats,
      });
    } catch (error) {
      res.status(500).json({
        error: 'Failed to fetch stats',
        message: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  /**
   * Manually verify a team
   */
  async verifyTeam(req: Request, res: Response): Promise<void> {
    try {
      const { teamId } = req.params;
      
      if (!teamId || typeof teamId !== 'string') {
        res.status(400).json({ error: 'Valid team ID is required' });
        return;
      }
      
      const team = await teamService.verifyTeam(teamId);
      
      res.json({
        success: true,
        message: 'Team verified successfully',
        team,
      });
    } catch (error) {
      res.status(500).json({
        error: 'Failed to verify team',
        message: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }
}

export default new TeamController();
