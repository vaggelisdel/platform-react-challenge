const PREFIX = 'features/favorites';

const ActionNames = {
  FETCH_ALL_BREEDS_REQUESTED: `${PREFIX}/all_breeds/requested`,
  FETCH_ALL_BREEDS_SUCCEEDED: `${PREFIX}/all_breeds/succeeded`,
  FETCH_ALL_BREEDS_FAILED: `${PREFIX}/all_breeds/failed`,

  FETCH_SELECTED_BREED_DETAILS_REQUESTED: `${PREFIX}/selected_breed_details/requested`,
  FETCH_SELECTED_BREED_DETAILS_SUCCEEDED: `${PREFIX}/selected_breed_details/succeeded`,
  FETCH_SELECTED_BREED_DETAILS_FAILED: `${PREFIX}/selected_breed_details/failed`,

  COMMON_API_RESET_DATA: `${PREFIX}/common_api_reset_data`
};

export default ActionNames;
