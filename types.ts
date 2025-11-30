import { LucideIcon } from 'lucide-react';

export enum PageType {
  HOME = 'home',
  PROFILE = 'profile',
  INSIGHTS = 'insights',
  MEDIA = 'media',
  CONTACT = 'contact',
  ADMIN = 'admin',
}

export type Language = 'ko' | 'en';

export interface NavItem {
  label: string;
  page: PageType;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TimelineItem {
  period: string;
  role: string;
  description: string;
  type: 'military' | 'diplomacy' | 'education';
}

export interface InsightItem {
  id: string; // Changed to string for Firestore ID
  category: string;
  title: string;
  summary: string;
  content?: string; // Full body content
  date: string;
  lang?: Language; 
}

export interface MediaItem {
  id: number;
  type: 'video' | 'press' | 'photo';
  title: string;
  source?: string;
  date?: string;
  imageUrl: string;
}