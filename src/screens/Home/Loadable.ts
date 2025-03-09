/**
 * Asynchronously loads the home screen
 */
import dynamic from 'next/dynamic';

export default dynamic(() => import('./index'), { ssr: true });
