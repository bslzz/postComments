export const getToken = () => localStorage.getItem('accessToken')

export const isAuthorized = () => (getToken() ? true : false)
