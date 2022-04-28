import FooterTrackMetadata from './FooterTrackMetadata';
import FooterTrackControls from './FooterTrackControls';
import FooterGlobalControls from './FooterGlobalControls';

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-white p-2">
      <div className="flex h-full items-center justify-between">
        <FooterTrackMetadata />
        <FooterTrackControls />
        <FooterGlobalControls />
      </div>
    </div>
  );
};

export default Footer;
