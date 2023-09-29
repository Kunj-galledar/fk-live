from django.shortcuts import redirect,render
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from voxoapp.views import show_cart_popup



class RestrictUrlsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if not request.user.is_authenticated and 'code' not in request.COOKIES and request.path in ['/verify_token','/update_password']:
            return HttpResponseRedirect(reverse('login_page'))
        
        checkout = request.COOKIES.get('checkout')

        if checkout == 'False' and request.path in ['/checkout_page']:
            return HttpResponseRedirect(reverse('cart_page'))
        
        if 'checkout' not in request.COOKIES and request.path in ['/checkout_page']:
            return HttpResponseRedirect(reverse('cart_page'))
        
        response = self.get_response(request)
        if response.status_code == 404:
            cart_products,totalCartProducts = show_cart_popup(request)
            context = {"breadcrumb": {"parent": 404, "child": 404},
               "cart_products": cart_products, "totalCartProducts": totalCartProducts,}
            return render(request, 'pages/pages/404.html',context)
        
        return response
    
    
    # def process_request(self, request):
    #     if request.path == '/checkout_page/':
    #         response = HttpResponse()
    #         response.delete_cookie('couponCode')
    #         return response
    
# class DeleteCookieMiddleware:
#     def process_request(self, request):
#         if request.path == '/checkout_page/':
#             response = HttpResponse()
#             response.delete_cookie('couponCode')
#             return response


# $(document).ready(function () {
#     $.ajax({
#         url: '/your_view_url/', // Replace with the actual URL of your Django view
#         method: 'GET',
#         dataType: 'json',
#         success: function (data) {
#             const isAuthenticated = data.is_authenticated;
            
#             if (isAuthenticated) {
#                 $(".product-box a.wishlist").on("click", function () {
#                     const notificationOptions = {
#                         icon: "fa fa-check",
#                         title: "Success!",
#                         message: "Item Successfully added to wishlist",
#                     };

#                     localStorage.setItem("wishlistpopup", JSON.stringify(notificationOptions));
#                     setTimeout(function () {
#                         localStorage.removeItem("wishlistpopup");
#                     }, 5000);
#                 });
#             }
#         },
#         error: function (error) {
#             console.error(error);
#         }
#     });
# });





