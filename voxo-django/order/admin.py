from django.contrib import admin

from voxoapp.models import CouponHistory
from .models import Order,ProductOrder,Cart,Wishlist,Compare,OrderTracking,CartProducts,PaymentMethod,OrderPayment,OrderBillingAddress

from django.urls import reverse
from django.utils.html import format_html

from django.db.models.functions import TruncDay
from django.db.models import Count
from django.core.serializers.json import DjangoJSONEncoder
import json

# Register your models here.

class OrderAdmin(admin.ModelAdmin):
    exclude = ['slug','orderedByCustomer','orderPrice','orderSavings','orderTotalPrice']
    list_display=['orderedByCustomer','id','orderTransactionId','orderPrice','orderTotalTax','orderTotalPrice','orderSavings','benefit_amount','final_amount','orderedOrNot','orderCreatedAt']
    ordering=['-orderCreatedAt']
    list_per_page=10
    
    def get_queryset(self, request):
       
        # if request.user.is_vendor:  
        #     queryset = super(OrderAdmin, self).get_queryset(request)         
        #     return queryset.filter(orderedProductsvendor=request.user)

        if request.user.is_superuser:
            queryset = super(OrderAdmin, self).get_queryset(request)
            return queryset

    @admin.display(description='Coupon Benefit Amount')
    def benefit_amount(self, obj):
        orderAmount=obj.orderTotalPrice
        orderAmountPayed=obj.orderPayment.orderAmount
        bebefitAmount=orderAmount-orderAmountPayed
        return bebefitAmount
    
    @admin.display(description='Amount')
    def final_amount(self, obj):
        orderAmountPayed=obj.orderPayment.orderAmount
        return orderAmountPayed
    
admin.site.register(Order,OrderAdmin)



class ProductOrderAdmin(admin.ModelAdmin):
 

# New code added starts ---------------------------------------------------------------------------------------

    # def chart_link(self, obj):
    #     chart_url = reverse('sales_chart')
        

    #     return format_html('<a href="{}">View chart</a>', chart_url)
    # chart_link.short_description = 'Sales Chart'
    

    # def changelist_view(self, request, extra_context=None):
    #     self.chart_link.admin_order_field = ''
    #     self.chart_link.queryset = self.model.objects.all()
    #     self.chart_link.model_admin = self
    #     self.chart_link.request = request
    #     self.chart_link.admin_site = self.admin_site
    #     return super().changelist_view(request, extra_context=extra_context)
    
# New code added ends------------------------------------------------------------------------------------------ 


    def get_queryset(self, request):
       
        if request.user.is_vendor:  
            queryset = super(ProductOrderAdmin, self).get_queryset(request)
            return queryset.filter(productOrderedProductsvendor=request.user)
        else:
        # if request.user.is_superuser:
            queryset = super(ProductOrderAdmin, self).get_queryset(request)
            return queryset

    exclude = ['slug','productOrderedByCustomer','productOrderFinalPrice','productOrderSavings','productOrderTotalPrice','productOrderDiscount']
    list_display=['productOrderedProducts','productOrderOrderId','productOrderPaymentTransactionId','productOrderedByCustomer','productOrderedProductsvendor','productOrderedProductQuantity','productOrderTotalPrice','productOrderSavings','productOrderFinalPrice','productVariantOrderTax','productVariantOrderTaxPrice','productVariantOrderFinalPriceAfterTax','productOrderCreatedAt']
    ordering=['-productOrderCreatedAt']
    list_per_page=10

admin.site.register(ProductOrder,ProductOrderAdmin)

class OrderBillingAddressAdmin(admin.ModelAdmin):
    list_display=['get_full_name','customerMobile','customerEmail','orderId','orderTransactionId']
    ordering=['-orderBillingAddressCreatedAt']
    list_per_page=10


admin.site.register(OrderBillingAddress,OrderBillingAddressAdmin)

# class CartAdmin(admin.ModelAdmin):
#     exclude = ['slug','cartByCustomer']
#     list_display=['cartByCustomer','cartTotalProduct','getTotalPrice','getFinalPriceAfterTax']
#     # ____________________________________________________________________________________
  
#     def get_queryset(self, request):
            
#         if request.user.is_customer:
#             queryset = super(CartAdmin, self).get_queryset(request)
#             return queryset.filter(cartByCustomer=request.user)
#             # return queryset
#         if request.user.is_superuser:
#             queryset = super(CartAdmin, self).get_queryset(request)
#             return queryset
        
# admin.site.register(Cart,CartAdmin)

class CartProductAdmin(admin.ModelAdmin):
    exclude = ['slug']
    list_display=['cart_id','cartByCustomer','cartProduct','cartProductQuantity']


admin.site.register(CartProducts,CartProductAdmin)

# class CompareAdmin(admin.ModelAdmin):
#     exclude=['slug']
#     list_display=['compareByCustomer','getCompareProducts']

#     def get_queryset(self, request):

#         if request.user.is_customer:
#             queryset=super(CompareAdmin,self).get_queryset(request)
#             return queryset.filter(compareByCustomer=request.user)

#         if request.user.is_superuser:
#             queryset = super(CompareAdmin, self).get_queryset(request)
#             return queryset

# admin.site.register(Compare,CompareAdmin)

# class WishlistAdmin(admin.ModelAdmin):
#     exclude = ['slug','wishlistByCustomer']
#     list_display=['wishlistByCustomer','getWishlistProducts']
#     # ____________________________________________________________________________________

#     def get_queryset(self, request):
            
#         if request.user.is_customer:
#             queryset = super(WishlistAdmin, self).get_queryset(request)
#             return queryset.filter(wishlistByCustomer=request.user)
#             # return queryset
#         if request.user.is_superuser:
#             queryset = super(WishlistAdmin, self).get_queryset(request)
#             return queryset

# admin.site.register(Wishlist,WishlistAdmin)


class OrderTrackingAdmin(admin.ModelAdmin):
    exclude=['trackingOrderVendor','trackingOrderCustomer','trackingOrder']
    list_display=['trackingOrderCustomer','trackingOrderVendor','trackingOrderOrderId','trackingOrderOrderTransactionId','getProducts','trackingOrderStatus','trackingModifiedAt']
    search_fields=['trackingOrderCustomer__email','trackingOrderStatus','trackingOrderOrderId']
    list_filter=['trackingOrderCustomer__email','trackingOrderStatus']
    ordering=['-trackingModifiedAt']
    list_per_page=10

    def get_queryset(self, request):

        if request.user.is_vendor:  
            queryset = super(OrderTrackingAdmin, self).get_queryset(request)
            return queryset.filter(trackingOrderVendor=request.user)
        else:  
        # if request.user.is_superuser:
            queryset = super(OrderTrackingAdmin, self).get_queryset(request)
            return queryset

admin.site.register(OrderTracking,OrderTrackingAdmin)


class PaymentMethodAdmin(admin.ModelAdmin):
    exclude=['slug']
    list_display=['paymentMethodName']
    ordering=['-paymentMethodCreatedAt']

admin.site.register(PaymentMethod,PaymentMethodAdmin)

class OrderPaymentAdmin(admin.ModelAdmin):
    exclude=['slug']
    list_display=['orderPaymentOrderId','orderPaymentTransactionId','orderPaymentFromCustomer','orderAmount','orderPaymentMethodName','orderPaymentCreatedAt']
    ordering=['-orderPaymentCreatedAt']
    list_per_page=10

    # ,'orderNameOnCard','orderCardNumber','orderExpireationDate','orderCVV'
    
admin.site.register(OrderPayment,OrderPaymentAdmin)
