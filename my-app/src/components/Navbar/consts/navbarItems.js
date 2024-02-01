import FaceIcon from '@mui/icons-material/Face';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <FaceIcon />,
        label: 'Authentication',
        route: 'authentication',
    },
    {
        id: 1,
        icon: <FaceIcon />,
        label: 'Login',
        route: 'login',
    },
    {
        id: 2,
        icon: <FaceIcon />,
        label: 'Register',
        route: 'register',
    },
    {
        id: 3,
        icon: <CalendarMonthRoundedIcon />,
        label: 'Calendar',
        route: 'calendar',
    },
    {
        id: 4,
        icon: <NewspaperRoundedIcon />,
        label: 'Newsletter',
        route: 'newsletter',
    },
    {
        id: 5,
        icon: <ChatRoundedIcon />,
        label: 'Chat',
        route: 'chat',
    },
    {
        id: 6,
        icon: <Diversity3RoundedIcon />,
        label: 'Friends',
        route: 'friends',
    },
    {
        id: 7,
        icon: <InfoRoundedIcon />,
        label: 'Info',
        route: 'info',
    },
]