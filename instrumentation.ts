// Removed Sentry-related imports and logic

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // You can still import or configure other server-side code here if necessary
    console.log('Running in Node.js environment');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    // You can still import or configure other edge-specific code here if necessary
    console.log('Running in Edge environment');
  }
}

// Provide your own implementation for request error handling, if needed
export const onRequestError = (error: any) => {
  // You can log the error or handle it as necessary
  console.error('Request error occurred:', error);
};
