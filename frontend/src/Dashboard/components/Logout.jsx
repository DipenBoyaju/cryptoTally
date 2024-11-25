import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { persistor } from "../../app/store";
import { removeCredentials } from "../../features/auth/authSlice";
import { useUserSignOutMutation } from "../../apis/authApi";

const Logout = () => {

  const [logout] = useUserSignOutMutation()
  const dispatch = useDispatch();
  const nav = useNavigate();


  const handleLogout = async () => {
    try {
      const response = await logout().unwrap();
      if (response.success) {
        dispatch(removeCredentials());
        persistor.purge();
        nav('/')
        toast.success(response.message, {
          position: "top-right"
        });
      }
    } catch (error) {
      console.log('logout error:', error);
      toast.error(error.data?.message || 'An error occurred', {
        position: "top-right"
      });
    }
  }
  return (
    <div>
      <p className="cursor-pointer bg-orange-500 w-fit p-2 px-4 rounded-md " onClick={handleLogout}>Logout</p>
    </div>
  )
}
export default Logout