import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { Navigation } from './components/Navigation';
import { Dashboard } from './components/screens/Dashboard';
import { UploadArtwork } from './components/screens/UploadArtwork';
import { AIProcessing } from './components/screens/AIProcessing';
import { ReviewEdit } from './components/screens/ReviewEdit';
import { Collection } from './components/screens/Collection';
import { QRCodeScreen } from './components/screens/QRCode';
import { Analytics } from './components/screens/Analytics';
import { Settings } from './components/screens/Settings';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} />;
      case 'upload':
        return <UploadArtwork onNavigate={setCurrentPage} />;
      case 'ai-processing':
        return <AIProcessing onComplete={() => setCurrentPage('review-edit')} />;
      case 'review-edit':
        return <ReviewEdit />;
      case 'collection':
        return <Collection />;
      case 'qr-code':
        return <QRCodeScreen />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background flex flex-col lg:flex-row">
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="flex-1 overflow-auto">
          {renderPage()}
        </main>
      </div>
    </ThemeProvider>
  );
}