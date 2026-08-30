import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Farzin Abbasi",
    short_name: "Farzin'm",
    description: "Farzin Abbasi - Full-Stack Developer",
    start_url: '/',
    display: 'standalone',
    background_color: '#00cfcf',
    theme_color: '#ccc',
    icons: [
      {
        src: '/icon-512.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
  };
}