const PREFIX = 'features/favorites';

const ActionNames = {
  TOOGLE_TO_FAVORITES_REQUESTED: `${PREFIX}/toogle_to_favorites/requested`,
  TOOGLE_TO_FAVORITES_SUCCEEDED: `${PREFIX}/toogle_to_favorites/succeeded`,
  TOOGLE_TO_FAVORITES_FAILED: `${PREFIX}/toogle_to_favorites/failed`,

  COMMON_API_RESET_DATA: `${PREFIX}/common_api_reset_data`
};

export default ActionNames;
