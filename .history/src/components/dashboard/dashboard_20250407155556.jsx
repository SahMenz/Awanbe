// import notificationIcon from "../../../assets/images/notificationIcon.svg";
// import nightIcon from "../../../assets/images/nightIcon.svg";
// import dayIcon from "../../../assets/images/dayIcon.svg";
// import profileIcon from "../../../assets/images/profileIcon.svg";
import { FaRegEye, FaUserCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfilePreviewModal from "../../profilePreview/ProfilePreviewModal";
import EditProfileImgModal from "./auxiliary/EditProfileImgModal";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { IoIosWarning } from "react-icons/io";

function DashboardNav({ userDetails, userSkills, userLinks }) {

  const navigate = useNavigate()
  const navigateTo = (path) => navigate(path)
  const goHome = () => navigateTo('/')
  const goToActivateAccount = () => navigateTo('/auth/activate-account')

  const { pathname } = useLocation()

  const [navHeader, setNavHeader] = useState()
  const [profilePreviewModal, setProfilePreviewModal] = useState({ visible: false, hide: null })
  const [editProfileImgModal, setEditProfileImgModal] = useState({ visible: false, hide: null})

  const openProfilePreviewModal = () => setProfilePreviewModal({ visible: true, hide: hideProfilePreviewModal })
  const hideProfilePreviewModal = () => setProfilePreviewModal({ visible: false, hide: null })

  const openEditProfileImgModal = () => setEditProfileImgModal({ visible: true, hide: hideEditProfileImgModal })
  const hideEditProfileImgModal = () => setEditProfileImgModal({ visible: false, hide: null })


  useEffect(() => {
    if(!userDetails || !userSkills){
      goHome()
    }

    if(pathname.toLowerCase().includes('/dashboard/settings')){
      if(pathname.toLowerCase().includes('profile')){
        setNavHeader('Profile')
      
      } else {
        setNavHeader('Settings')
      }
    
    } else if(pathname.toLowerCase().includes('/dashboard/courses')){
      setNavHeader('Courses')

    } else if(pathname.toLowerCase().includes('/dashboard/jobs')){
      setNavHeader('Jobs')
      
    } else{
      setNavHeader(`Welcome, ${userDetails.full_name}`)
    }
  }, [pathname])

  if(!userDetails || !userSkills || !userLinks){
    return <></>
  }

  const { full_name, profile_img, activated } = userDetails

  return (
    <div
      className="d-lg-flex d-md-block d-block align-items-start justify-content-between bg-ff"
      style={{
        borderRadius: "16px",
        padding: "25px 30px",
      }}
    >
      <div className="mb-lg-0 mb-md-3 mb-3">
        <div
          className="fw-500 mb-1 sizing23 txt-00"
        >
          { navHeader }
        </div>
        <p className="m-0 p-0 txt-73 fw-500 txt-14">
          {
            activated
            ?
              <span><IoShieldCheckmarkSharp size={20} color="#EB1C25" /> Account verified</span>
            :
              <span><IoIosWarning size={20} color="#EB1C25" /> Account un-verified <span onClick={goToActivateAccount} style={{ textDecoration: 'underline' }} className="txt-eb clickable">Click to verify</span> </span>
          }
        </p>
      </div>
      <div
        className="d-flex justify-content-lg-end justify-content-md-start justify-content-start align-items-center"
      >
        <div className="clickable" onClick={openEditProfileImgModal}>
          {
            profile_img
            ?
              <img src={profile_img} width={'50px'} height={'50px'} className="rounded-circle" />
            :
              <FaUserCircle color="#000" size={40} />
          }
        </div>        
        <div>
          <FaRegEye size={30} color="#000" className="mx-4 clickable" onClick={openProfilePreviewModal} />
        </div>
      </div>

      <ProfilePreviewModal 
        modalProps={profilePreviewModal} 
        userDetails={userDetails} 
        userSkills={userSkills}
        userLinks={userLinks}
      />

      <EditProfileImgModal modalProps={editProfileImgModal} />
    </div>
  );
}

export default DashboardNav;
