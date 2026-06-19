import { readFileSync, writeFileSync } from 'fs';

const filepath = 'src/components/SiteFooter.tsx';
let c = readFileSync(filepath, 'utf8');

const icons = `
const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
)
const TwitterIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
)
const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
`;

c = c.replace(/import \{([^}]*)\} from 'lucide-react'/, (m, g) => {
  const kept = g.split(',').map(s => s.trim()).filter(s => !['Instagram','Linkedin','Twitter'].includes(s)).join(', ');
  return `import { ${kept} } from 'lucide-react'` + icons;
});

c = c.replace(/<Instagram/g, '<InstagramIcon').replace(/<\/Instagram>/g, '</InstagramIcon>');
c = c.replace(/<Twitter/g, '<TwitterIcon').replace(/<\/Twitter>/g, '</TwitterIcon>');
c = c.replace(/<Linkedin/g, '<LinkedinIcon').replace(/<\/Linkedin>/g, '</LinkedinIcon>');

writeFileSync(filepath, c);
console.log('✅ Done! SiteFooter.tsx patched.');
