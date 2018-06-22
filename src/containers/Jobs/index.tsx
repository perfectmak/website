import withGAPageView from '@containers/GoogleAnalyticsTracker';
import { withSiteData } from 'react-static';
import Jobs from './Jobs';
export default withGAPageView(withSiteData(Jobs));
