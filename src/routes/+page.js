import CryptoJS from 'crypto-js';

/** @type {import('./$types').PageLoad} */
export function load() {
  const hashedEmail = CryptoJS.SHA256('grooveturtle29@gmail.com');
  const gravatarUrl = `https://www.gravatar.com/avatar/${hashedEmail}?s=200`;

  return {
    menu: {
      home: '홈',
      about: '소개',
      skills: '기술',
      projects: '프로젝트',
      links: '연락처',
    },

    profile: {
      gravatarUrl
    },
  };
}