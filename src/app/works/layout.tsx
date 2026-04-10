import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selected Works | Grisha Obolenskiy',
  description: 'A selection of UI/UX and product design case studies, including apps, websites, and dashboards.',
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
