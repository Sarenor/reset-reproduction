
export const actions = {
    default: async ({request}) => {
      const formData = await request.formData();
      console.log('foo',formData.get('signage'));
      console.log('vanilla',formData.get('vanilla'));
    }
  }