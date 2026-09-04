import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import Reasons from '@/components/Reasons';
import Works from '@/components/Works';
import DaySchedule from '@/components/DaySchedule';
import Philosophy from '@/components/Philosophy';
import Message from '@/components/Message';
import StaffVoice from '@/components/StaffVoice';
import Jobs from '@/components/Jobs';
import Faq from '@/components/Faq';
import EntrySection from '@/components/EntrySection';
import SiteFooter from '@/components/SiteFooter';

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <Problems />
        <Reasons />
        <Works />
        <DaySchedule />
        <Philosophy />
        <Message />
        <StaffVoice />
        <Jobs />
        <Faq />
        <EntrySection />
      </main>
      <SiteFooter />
    </>
  );
}
