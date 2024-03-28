<?php

add_theme_support('post-thumbnails');

// add_filter('graphql_post_object_connection_query_args', function ($args) {
//     $args['no_found_rows'] = false;
//     return $args;
// });

// add_filter('graphql_connection_page_info', function ($page_info, $connection) {
//     $page_info['total'] = null;
//     if ($connection->get_query() instanceof \WP_Query) {
//         if (isset($connection->get_query()->found_posts)) {
//             $page_info['total'] = (int) $connection->get_query()->found_posts;
//         }
//     }
//     return $page_info;
// }, 10, 2);

// add_action('graphql_register_types', function () {

//     register_graphql_field('WPPageInfo', 'total', [
//         'type' => 'Int',
//     ]);

// });
