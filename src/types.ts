export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  visualType: string;
  deliverables: string[];
  focusAreas: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  summary: string;
  details: string;
  iconName: string;
  deliverables: string[];
}

export interface CapabilityArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface PrincipleItem {
  number: string;
  title: string;
  quote: string;
  description: string;
}
