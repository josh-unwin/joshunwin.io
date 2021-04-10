import ProfileCard from '../components/ProfileCard';
import SecondaryCard from '../components/SecondaryCard';
import Link from 'next/link';

import ThemeButton from '@/components/ThemeButton';

const ProfileContainer = ({mounted, theme, setTheme}) => {
  return (
    <div className="h-screen bg-gray-200 dark:bg-gray-950 flex items-center justify-center text-black dark:text-white">
      <div className="absolute left-0 top-0">
        <ThemeButton mounted={mounted} theme={theme} setTheme={setTheme} />
      </div>
      <ProfileCard />
      <SecondaryCard className="rotate-6" />
      <SecondaryCard className="rotate-3" />
      {/* <span className="font-code absolute flex items-center transform rotate-90" style={{bottom: 60, right: -30}}>hello, world <span className="animate-slow-pulse ml-1 pb-1">▋</span></span> */}
        <div className="cursor-pointer h-8 font-code absolute flex items-center hidden sm:inline transform rotate-90 -right-55">
          <Link href="#content">
            <span className="hover:text-primarycolor-dark">my blog & more 
              <span className="ml-2 animate-slow-pulse">-------{'>'}</span>
            </span>
          </Link>
        </div>
        <div className="cursor-pointer h-8 font-code absolute flex items-center transform sm:hidden bottom-4">
          <Link href="#content">
            <span className="hover:text-primarycolor-dark">my blog & more 
              <span className="ml-2 animate-slow-pulse">{'▼'}</span>
            </span>
          </Link>
        </div>
    </div>
  )
}

export default ProfileContainer