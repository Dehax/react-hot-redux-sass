import Cookies from 'universal-cookie'


const cookies = new Cookies()

export const getAuthHeader = () => {
  const token = cookies.get('token')
  
  if (!token) {
    return {}
  }
  
  return {
    'X-Auth-Token': token,
  }
}
