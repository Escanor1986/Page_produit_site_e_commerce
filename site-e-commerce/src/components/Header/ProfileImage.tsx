import profilLogo from '../../assets/pictureAvatarReduceSize.png';

function ProfileImage() {
  return (
    <img
      className="logo-nav w-12 h-12 cursor-pointer rounded-full hover:ring-2 hover:ring-orange-500 transition duration-300"
      src={profilLogo}
      alt="profil picture"
    />
  );
}

export default ProfileImage;
