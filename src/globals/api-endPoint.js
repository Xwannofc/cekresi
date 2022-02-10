import CONFIG from './config';

const API_ENDPOINT = {
  TRACKING: (Resi, Jasa) => `${CONFIG.BASE_URL}v1/track?api_key=${CONFIG.KEY}&courier=${Jasa}&awb=${Resi}`
};

export default API_ENDPOINT;
