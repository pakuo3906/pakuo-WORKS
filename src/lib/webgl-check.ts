// WebGL support detection
export const isWebGLSupported = (): boolean => {
  try {
    if (typeof window === 'undefined') return false;
    
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!(gl && gl instanceof WebGLRenderingContext);
  } catch {
    return false;
  }
};

// Device performance estimation
export const getDevicePerformance = (): 'low' | 'medium' | 'high' => {
  if (typeof window === 'undefined') return 'medium';
  
  const { userAgent } = navigator;
  const { hardwareConcurrency } = navigator;
  
  // Basic device detection
  if (/Mobi|Android/i.test(userAgent)) {
    return 'low'; // Mobile devices
  }
  
  if (hardwareConcurrency && hardwareConcurrency >= 8) {
    return 'high'; // High-end desktop
  }
  
  return 'medium'; // Default
};