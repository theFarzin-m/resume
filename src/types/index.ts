import { IconType } from 'react-icons';

export interface Skill {
  title: string;
  category: 'Frontend' | 'Backend' | 'DataBase & Tools';
  level: number,
  icon: IconType;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  videoDesk?: string;
  videoPhon?: string;
}