"""voxo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from . import views


urlpatterns = [
    path('admin/', views.index),

    path('set_currency_to_session',views.set_currency_to_session,name='set_currency_to_session'),
    path('get_selected_currency',views.get_selected_currency,name='get_selected_currency'),

    # Index page routes

    path('', views.index_default, name='index_default'),
    path('setcookie', views.setCookie, name='setCookie'),
    
    # Forgot password routes
    
    path('contact_us',views.contact_us, name='contact_us'),
    path('forgot_password',views.forgot_password, name='forgot_password'),
    path('verify_token',views.verify_token, name='verify_token'),
    path('update_password',views.update_password, name='update_password'),
    path('change_password',views.change_password, name='change_password'),
    path('remove_address/<str:id>',views.remove_address, name='remove_address'),
    path('delete_user',views.delete_user, name='delete_user'),
    
    

    # Home pages routes

    path('login_page', views.login_page, name='login_page'),
    path('logout_page', views.logout_page, name='logout_page'),
    path('signup_page', views.signup_page, name='signup_page'),
    path('index_default', views.index_default, name='index_default'),
    path('furniture_demo', views.furniture_demo, name='furniture_demo'),
    path('electronics_demo', views.electronics_demo, name='electronics_demo'),
    path('shoes_demo', views.shoes_demo, name='shoes_demo'),
    path('flower_demo', views.flower_demo, name='flower_demo'),
    path('vegetables_demo', views.vegetables_demo, name='vegetables_demo'),
    path('search_products/', views.search_products, name='search_products'),
    

    # Shop pages routes
    
    path('create_query_params_url/<str:path>', views.create_query_params_url, name='create_query_params_url'),
    
    path('search_query_params_url', views.search_query_params_url, name='search_query_params_url'),
    
    
    path('canvas_filter', views.canvas_filter, name='canvas_filter'),
    path('canvas_filter/<str:category_id>', views.canvas_filter, name='canvas_filter_with_id'),
    
    path('category_filter', views.category_filter, name='category_filter'),
    path('category_filter/<str:category_id>', views.category_filter, name='category_filter_with_id'),
    
    path('filter_hide',views.filter_hide, name='filter_hide'),
    path('filter_hide/<str:category_id>',views.filter_hide, name='filter_hide_with_id'),
    
    path('shop_left_slidebar', views.shop_left_slidebar, name='shop_left_slidebar'),
    path('shop_left_slidebar/<str:category_id>', views.shop_left_slidebar, name='shop_left_slidebar_with_id'),
    
    path('list_infinite',views.list_infinite, name='list_infinite'),
    path('list_infinite/<str:category_id>',views.list_infinite, name='list_infinite_with_id'),
    
    path('shop_list',views.shop_list, name='shop_list'),
    path('shop_list/<str:category_id>',views.shop_list, name='shop_list_with_id'),
    
    path('shop_no_sidebar',views.shop_no_sidebar, name='shop_no_sidebar'),
    path('shop_no_sidebar/<str:category_id>',views.shop_no_sidebar, name='shop_no_sidebar_with_id'),
    
    path('shop_right_sidebar',views.shop_right_sidebar, name='shop_right_sidebar'),
    path('shop_right_sidebar/<str:category_id>', views.shop_right_sidebar, name='shop_right_sidebar_with_id'),

    path('shop_top_filter',views.shop_top_filter, name='shop_top_filter'),
    path('shop_top_filter/<str:category_id>',views.shop_top_filter, name='shop_top_filter_with_id'),
    
    path('shop_with_category',views.shop_with_category, name='shop_with_category'),
    path('shop_with_category/<str:category_id>', views.shop_with_category, name='shop_with_category_with_id'),

    
    
# Product pages routes

    path('image_4/<str:id>', views.image_4, name='image_4'),
    path('product_360_view/<str:id>', views.product_360_view, name='product_360_view'),
    path('bundle/<str:id>',views.bundle, name='bundle'),
    path('product-detail/<str:id>', views.left_slidebar, name='left_slidebar'),
    path('get_product_variant',views.get_product_variant,name='get_product_variant'),
    path('left_thumbnail/<str:id>',views.left_thumbnail, name='left_thumbnail'),
    path('product_no_sidebar/<str:id>',views.product_no_sidebar, name='product_no_sidebar'),
    path('product_right_slidebar/<str:id>',views.product_right_slidebar,name='product_right_slidebar'),
    path('right_thumbnail/<str:id>',views.right_thumbnail, name='right_thumbnail'),
    path('sticky/<str:id>',views.sticky, name='sticky'),
    path('video_thumbnail/<str:id>',views.video_thumbnail,name='video_thumbnail'),
    
    

# Pages  routes

    path('page_not_found',views.page_not_found, name='page_not_found'),
    path('coming_soon',views.coming_soon, name='coming_soon'),
    path('contact_us',views.contact_us, name='contact_us'),
    path('search_bar/',views.search_bar, name='search_bar'),
    path('search_bar/<str:params>',views.search_bar, name='search_bar_with_params'),
    
    

    # Cart page
    path('cart_page', views.cart_page, name='cart_page'),
    path('delete_cart_product/<str:id>',views.delete_cart_product, name='delete_cart_product'),
    path('delete_cart_product_form_header_button/<str:id>',views.delete_cart_product_form_header_button,name='delete_cart_product_form_header_button'),
    path('delete_cart_all_product', views.delete_cart_all_product,name='delete_cart_all_product'),
    path('cart_to_checkout_validation',views.cart_to_checkout_validation,name='cart_to_checkout_validation'),

    # Wishlist routes
    path('wishlist_page',views.wishlist_page,name='wishlist_page'),
    path('delete_wishlist_product/<str:id>',views.delete_wishlist_product, name='delete_wishlist_product'),
    path('add_to_cart_from_wishlist/<str:id>/<str:quantity>',views.add_to_cart_from_wishlist,name='add_to_cart_from_wishlist'),
    

    # Compare routes
    path('compare_page',views.compare_page, name='compare_page'),
    path('compare_products/<str:id>',views.compare_products,name='compare_products'),
    path('add_to_cart_from_compare/<str:id>/<str:quantity>',views.add_to_cart_from_compare,name='add_to_cart_from_compare'),

    # Quick view routes
    path('quick_view',views.quick_view,name='quick_view'),
    
    # Checkout routes
    path('validate_coupon/', views.validate_coupon, name='validate_coupon'),
    path('checkout_page',views.checkout_page,name='checkout_page'),
    
    
    path('payment_complete',views.payment_complete,name='payment_complete'),

    # Order success routes
    path('order_success',views.order_success,name='order_success'),

    # Order tracking routes
    path('order_tracking/<str:id>',views.order_tracking,name='order_tracking'),

    # User dashboard routes
    path('user_dashboard',views.user_dashboard,name='user_dashboard'),
    path('add_address',views.add_address,name='add_address'),
    path('get_address',views.get_address, name='get_address'),
    path('save_address',views.save_address, name='save_address'),

    
    # Common routes
    path('add_to_cart/<str:id>/<str:quantity>', views.add_to_cart, name='add_to_cart'),
    path('add_to_cart_product_quantity_management/<str:id>/<str:actionType>', views.add_to_cart_product_quantity_management, name='add_to_cart_product_quantity_management'),
    path('add_to_wishlist/<str:id>', views.add_to_wishlist, name='add_to_wishlist'),
    
 
# Blog Pages Routes    
    path('blog_details/<str:id>',views.blog_details, name='blog_details'),
    path('add_comment/<str:id>',views.add_comment, name='add_comment'),
    path('infinite_scroll',views.infinite_scroll, name='infinite_scroll'),

    path('left_sidebar',views.left_sidebar, name='left_sidebar'),
    path('left_sidebar_for_selected_category/<str:id>',views.left_sidebar_for_selected_category, name='left_sidebar_for_selected_category'),
    
    path('listing',views.listing, name='listing'),
    path('masonary',views.masonary, name='masonary'),
    path('no_sidebar',views.no_sidebar, name='no_sidebar'),
    path('right_sidebar',views.right_sidebar, name='right_sidebar'),
    
    path('customer_review',views.customer_review, name='customer_review'),
    path('user_authenticate',views.user_authenticate, name='user_authenticate'),
    

    

]
