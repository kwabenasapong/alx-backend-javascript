import signupUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([uploadPhoto(fileName), signupUser(firstName, lastName)])
    .then((values) => {
      for (const value of values) {
        if (value.status === 'rejected') {
          return [{ status: 'rejected', value: value.reason.message }];
        }
      }
      return values;
    })
    .then((values) => {
      const result = [];
      for (const value of values) {
        if (value.status === 'fulfilled') {
          result.push({ status: 'fulfilled', value: value.value });
        }
      }
      return result;
    });
}
