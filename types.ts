import { LucideIcon } from 'lucide-react';

export enum PageType {
  HOME = 'home',
  PROFILE = 'profile',
  INSIGHTS = 'insights',
  MEDIA = 'media',
  CONTACT = 'contact',
}

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
  id: number;
  category: string;
  title: string;
  summary: string;
  date: string;
}

export interface MediaItem {
  id: number;
  type: 'video' | 'press' | 'photo';
  title: string;
  source?: string;
  date?: string;
  imageUrl: string;
}