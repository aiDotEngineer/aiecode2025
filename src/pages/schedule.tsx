
import { NextPage } from 'next';
import ScheduleListPage from './schedule-list';
import { Header } from '../components/worldsfair-2025/Header'; // [INFO][2025-05-20T10:54:38-07:00] Un-commented for always-visible header

type ScheduleView = 'calendar' | 'list' | 'detailed';

interface ScheduleViewButtonProps {
  activeView: ScheduleView;
  viewName: ScheduleView;
  label: string;
  onClick: () => void;
}

const ScheduleViewButton: React.FC<ScheduleViewButtonProps> = ({
  activeView,
  viewName,
  label,
  onClick,
}) => (
  <button
    key={activeView}
    onClick={onClick}
    className={`px-4 py-2 rounded-md cursor-pointer transition-colors ${
      activeView === viewName
        ? 'bg-blue-600 text-white border border-blue-600'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
    }`}
  >
    {label}
  </button>
);

const SchedulePage: NextPage = () => {

  return (
    <>
      <Header path="/schedule" alwaysShow />
      <main className="min-h-screen bg-stone-100 py-32">
        <div className="max-w-full mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">World's Fair 2025 Schedule</h1>
          
          {/* Venue info box */}
          <div className="max-w-2xl mx-auto px-4 mb-8">
            <div
              className="block rounded-xl border border-blue-200 bg-blue-50 hover:bg-blue-100 transition shadow-md p-5 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="font-semibold text-lg text-blue-800">SF Marriott Marquis, June 3–5, 2025 &middot; San Francisco</span>
              </div>
              <div className="text-blue-900">Foothill/SOMA rooms are on Level 2</div>
              <div className="text-blue-900">Golden Gate Ballrooms are on B1</div>
              <div className="text-blue-900">Yerba Buena Ballrooms and Salons are on B2</div>
              
              <div className="flex items-center justify-center gap-3 mt-1">
                <a href="https://maps.app.goo.gl/3BqJtoYUmYGr94Va9" target="_blank" rel="noopener noreferrer" 
                className="text-blue-700 underline mt-1">Google Maps</a>
                <a href="https://www.marriott.com/en-us/hotels/sfodt-san-francisco-marriott-marquis/events/" target="_blank" rel="noopener noreferrer" 
                className="text-blue-700 underline mt-1">Floor Plans</a>
              </div>
            </div>
          </div>
          
          {/* Import instructions */}
          <div className="mb-8">
            <p className="text-center max-w-2xl mx-auto">
              To import all sessions to your calendar, click this{' '}
              <a href="https://sessionize.com/api/v2/e70d4iqk/view/All" className="underline hover:text-blue-800">iCal</a> link. <br /> 
              For hackers:{' '}
              <a href="https://ai.engineer/sessions-speakers-details.json" className="underline hover:text-blue-800">Get all sessions in JSON</a>{' '}
              (or{' '}
              <a href="https://sessionize.com/api/v2/w3hd2z8a/view/All" className="underline hover:text-blue-800">raw JSON</a> or {' '}
              <a href="https://sessionize.com/api/v2/w3hd2z8a/view/Speakers" className="underline hover:text-blue-800">speakers JSON</a> 
              ) for your own vibecoded view!
              We manually update this JSON dump regularly but the Sessionize schedule is the most up to date source of truth.
            </p>  
          </div>

          <div className="max-w-2xl text-md mx-auto mb-4 gap-2">
            Unofficial Views (may be out of date):
            {' '}
              <a href="https://aie-swipe.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">@noodlesoup's app</a> (Tinder-style talk discovery) or{' '}
              <a href="https://worlds-fair-schedule.agpallav.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">@pallavmac's app</a> (list+bookmarking) or{' '}
              <a href="https://aiewf.shebecoding.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Hebe Hillhorst's app</a> or{' '}
              <a
              href="https://testflight.apple.com/join/rYEaS8XA"
              className="underline hover:text-blue-800"
            >
              @CedricVidal's iOS TestFlight
            </a>{" "}
            (<a href="https://x.com/cedricvidal/status/1930136757334618229" className="underline hover:text-blue-800">vibecoded</a>). 
          </div>

          <div className="w-full h-[90vh]">
            
             <iframe
                className="w-full h-full"
                src={"https://sessionize.com/api/v2/hyxh7ov6/view/GridSmart"}
                frameBorder="0"
                title="World's Fair 2025 Schedule"
                sandbox="allow-scripts allow-same-origin"
              />
          </div>
        </div>

        <ScheduleListPage />
        
      </main>
    </>
  );
};

export default SchedulePage;
