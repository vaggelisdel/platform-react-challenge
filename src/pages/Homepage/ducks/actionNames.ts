const PREFIX = 'features/overview';

const ActionNames = {
  FETCH_RANDOM_CATS_REQUESTED: `${PREFIX}/random_cats/requested`,
  FETCH_RANDOM_CATS_SUCCEEDED: `${PREFIX}/random_cats/succeeded`,
  FETCH_RANDOM_CATS_FAILED: `${PREFIX}/random_cats/failed`,

  FETCH_SELECTED_CAT_DETAILS_REQUESTED: `${PREFIX}/selected_cat_details/requested`,
  FETCH_SELECTED_CAT_DETAILS_SUCCEEDED: `${PREFIX}/selected_cat_details/succeeded`,
  FETCH_SELECTED_CAT_DETAILS_FAILED: `${PREFIX}/selected_cat_details/failed`,

  COMMON_API_RESET_DATA: `${PREFIX}/common_api_reset_data`
};

export default ActionNames;
