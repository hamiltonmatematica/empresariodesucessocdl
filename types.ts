import React from 'react';

export interface Speaker {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  description?: string;
  speaker?: string;
}

export interface City {
  name: string;
  date?: string;
}

export interface Benefit {
  title: string;
  icon: React.ElementType;
}