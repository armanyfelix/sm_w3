import { atom, selector } from 'recoil';
import Gun from 'gun';
import 'gun/sea'


export const getUserState = selector({
  key: 'getUserState',
  get:  () => {
      const gun = Gun();
      const user = gun.user();
      user.auth(email.value, pass.value, (ctk: any) => {
        if (ctk.err) {
          console.log(ctk);
          setAlert(ctk.err);
        } else {
          console.log(ctk);
          router.push('/');
        }
      });
      return username;
  }
});

export const userState = atom({
  key: 'userState',
  default: getUserState,
});

