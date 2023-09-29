import random
from django.dispatch import receiver
from django.db.models.signals import post_save,post_delete,pre_delete
import faker
from accounts.models import CustomUser
from order.models import Order, OrderPayment, OrderTracking, ProductOrder
from product.models import AttributeName, AttributeValue, MultipleImages, ProBrand, ProCategory, ProUnit, ProVideoProvider, Product, ProductMeta, ProductReview, ProductVariant
from voxoapp.models import ContactUs

fake = faker.Faker()
vendors = CustomUser.objects.filter(is_vendor=True)
proCategorys=ProCategory.objects.all()
productBrands=ProBrand.objects.all()
productUnits=ProUnit.objects.all()
productVideoProviders=ProVideoProvider.objects.all()
productTypes = ['Simple']
productStatuss=[True]


# Signal To Create Simple Product ===========================================================================================================================

# @receiver(pre_delete, sender=ContactUs)
# def contact_us_pre_delete(sender, instance, **kwargs):
#     # pass
#     vendors = CustomUser.objects.filter(is_vendor=True)
#     proCategorys=ProCategory.objects.all()
#     productBrands=ProBrand.objects.all()
#     productUnits=ProUnit.objects.all()
#     productVideoProviders=ProVideoProvider.objects.all()  
#     productTypes = ['Simple']
#     productStatuss=[True]
#     image_urls = []
#     for _ in range(100):
#         width = random.randint(200, 800)  # Random width between 200 and 800 pixels
#         height = random.randint(200, 800)  # Random height between 200 and 800 pixels
#         image_url = f"https://picsum.photos/{width}/{height}"
#         image_urls.append(image_url)
    
    
#     for i in range(50):
#         productVendor=random.choice(vendors)
#         productName=fake.word()
#         productType=random.choice(productTypes)
#         productStatus=random.choice(productStatuss)
#         proCategory=random.choice(proCategorys)
#         productBrand=random.choice(productBrands)
#         productUnit=random.choice(productUnits)
#         productDescription=fake.paragraph()
#         productImageFront=random.choice(image_urls)
#         productImageBack=random.choice(image_urls)
#         productThumImage=random.choice(image_urls)
#         productVideoProvider=random.choice(productVideoProviders)
#         productVideoLink=fake.url()
#         productWeight=random.randint(0, 500)
#         productDimension=fake.word()
#         productSKU=fake.word()
#         productUpsells=fake.word()
        
#         product=Product.objects.create(productVendor=productVendor,productName=productName,productType=productType,productStatus=productStatus,
#                 proCategory=proCategory,productBrand=productBrand,productUnit=productUnit,productDescription=productDescription,
#                 productImageFront=productImageFront,productImageBack=productImageBack,productThumImage=productThumImage,productVideoProvider=productVideoProvider,
#                 productVideoLink=productVideoLink,productWeight=productWeight,productDimension=productDimension,
#                 productSKU=productSKU,productUpsells=productUpsells)
        
        
#         productVariantQuantity=random.randint(1, 300)
#         productVariantPrice=random.randint(1, 500)
#         productVariantDiscount=random.randint(1, 99)
#         productVariantTax=random.randint(1, 99)
        
#         ProductVariant.objects.create(variantProduct=product,productVariantQuantity=productVariantQuantity,
#                                       productVariantPrice=productVariantPrice,productVariantDiscount=productVariantDiscount,productVariantTax=productVariantTax)
        
#         for i in range(3):
#             MultipleImages.objects.create(multipleImageOfProduct=product,multipleImages=random.choice(image_urls))

# Signal To Create Classified Product ===========================================================================================================================

# @receiver(pre_delete, sender=ContactUs)
# def contact_us_pre_delete(sender, instance, **kwargs):
#     # pass
#     vendors = CustomUser.objects.filter(is_vendor=True)
#     proCategorys=ProCategory.objects.all()
#     productBrands=ProBrand.objects.all()
#     productUnits=ProUnit.objects.all()
#     productVideoProviders=ProVideoProvider.objects.all()
#     productTypes = ['Classified']
#     productStatuss=[True]
#     image_urls = []
#     for _ in range(100):
#         width = random.randint(200, 800)  # Random width between 200 and 800 pixels
#         height = random.randint(200, 800)  # Random height between 200 and 800 pixels
#         image_url = f"https://picsum.photos/{width}/{height}"
#         image_urls.append(image_url)
    
    
#     for i in range(5):
#         productVendor=random.choice(vendors)
#         productName=fake.word()
#         productType=random.choice(productTypes)
#         productStatus=random.choice(productStatuss)
#         proCategory=random.choice(proCategorys)
#         productBrand=random.choice(productBrands)
#         productUnit=random.choice(productUnits)
#         productDescription=fake.paragraph()
#         productImageFront=random.choice(image_urls)
#         productImageBack=random.choice(image_urls)
#         productThumImage=random.choice(image_urls)
#         productVideoProvider=random.choice(productVideoProviders)
#         productVideoLink=fake.url()
#         productWeight=random.randint(0, 500)
#         productDimension=fake.word()
#         productSKU=fake.word()
#         productUpsells=fake.word()
        
#         product=Product.objects.create(productVendor=productVendor,productName=productName,productType=productType,productStatus=productStatus,
#                 proCategory=proCategory,productBrand=productBrand,productUnit=productUnit,productDescription=productDescription,
#                 productImageFront=productImageFront,productImageBack=productImageBack,productThumImage=productThumImage,productVideoProvider=productVideoProvider,
#                 productVideoLink=productVideoLink,productWeight=productWeight,productDimension=productDimension,
#                 productSKU=productSKU,productUpsells=productUpsells)
        
        
        
        
#         unique_attribute_names = AttributeName.objects.all()
#         attribute_names_list = list(unique_attribute_names)
#         random_objects = random.sample(attribute_names_list, 3)

                     
#         for i in range(2):
#             productVariantQuantity=random.randint(1, 300)
#             productVariantPrice=random.randint(1, 500)
#             productVariantDiscount=random.randint(1, 99)
#             productVariantTax=random.randint(1, 99)
#             sampled_attribute_values = []
#             for attribute_name in random_objects:
#                 attribute_values = AttributeValue.objects.filter(attributeName=attribute_name).order_by('?')[:1]
#                 sampled_attribute_values.extend(attribute_values)
#             pv=ProductVariant.objects.create(variantProduct=product,productVariantQuantity=productVariantQuantity,
#                                       productVariantPrice=productVariantPrice,productVariantDiscount=productVariantDiscount,productVariantTax=productVariantTax)
            
#             for value in sampled_attribute_values:
#                 pv.productVariantAttribute.add(value)
            
#         for i in range(3):
#             MultipleImages.objects.create(multipleImageOfProduct=product,multipleImages=random.choice(image_urls))


# Signal for to delete all order related objects | Use only for developement purpose 
@receiver(pre_delete, sender=ContactUs)
def contact_us_pre_delete(sender, instance, **kwargs):
    order= Order.objects.all()
    order.delete()
    porder=ProductOrder.objects.all()
    porder.delete()
    orderTracking=OrderTracking.objects.all()
    orderTracking.delete()
    orderPayment=OrderPayment.objects.all()
    orderPayment.delete()

# # Signal for adding reviews | Use only for developement purpose 
# @receiver(pre_delete, sender=ContactUs)
# def contact_us_pre_delete(sender, instance, **kwargs):
#     products= Product.objects.all()
#     customer1=CustomUser.objects.get(email='customer1@gmail.com')
#     customer2=CustomUser.objects.get(email='customer2@gmail.com')
#     customerList=[customer1,customer2]
#     for product in products:
#         ProductReview.objects.create(productReviewByCustomer=random.choice(customerList),productName=product,productReview=fake.word(),productRatings=random.randint(1, 5))
