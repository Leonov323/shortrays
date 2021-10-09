
 export const LocationId = () => {

    const current_url = location.pathname

    const separateUrl = current_url.replace(/[^a-zа-яё0-9\s]/gi , ' ')

    const removeTables = separateUrl.replace( 'tables', ' ' )

    const removeWaiters = removeTables.replace( 'waiters', ' ' )

    const removeDashboard = removeWaiters.replace( 'dashboard', ' ' )
    
    const removeUserId = removeDashboard.slice( 33 )

    const removeSpaces = removeUserId.replace(/\s/g, '')
 
    const toObj = removeSpaces

    return toObj 
    
  }