from datetime import datetime, timedelta
# import datetime
import uuid
from django import forms
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from accounts.managers import CustomUserManager
from django.core.validators import RegexValidator
from django.contrib.auth.models import Group
from django.utils.html import mark_safe


class CustomUser(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True,
                          default=uuid.uuid4,
                          editable=False)
    email = models.EmailField(
        max_length=255, unique=True, verbose_name='Email')
    username = models.CharField(
        max_length=200, verbose_name='Name')
    profilePicture = models.ImageField(
        verbose_name='Avtar', blank=True, null=True, upload_to='fashion/user')
    is_active = models.BooleanField(default=True, verbose_name='Status')
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=True)
    is_vendor = models.BooleanField(default=False,editable=False)
    is_customer = models.BooleanField(default=False,editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

    @property
    def is_superuser(self):
        return self.is_admin
        


    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    # -------------------------------------------------------------------------
    # Compelsary field validation in admin panel user creation
    # -------------------------------------------------------------------------
    # def clean(self):
    #     if self.is_vendor == self.is_customer:
    #         raise forms.ValidationError(
    #             {
    #                 "is_vendor": "Please select a Vendor OR Customer",
    #                 "is_customer": "Please select a Vendor OR Customer",
    #             }
    #         )        
    # -------------------------------------------------------------------------
    
        
    

    def save(self, *args, **kwargs):   
        selected_groups = self.groups.all()
        if selected_groups:
            for grp in selected_groups:
                # grpList.append(str(grp.name))
                if grp.name == "Customer":
                    self.is_customer=True
                if grp.name == "Vendor":
                    self.is_vendor=True
        
        if self.is_customer:
            self.is_staff=False
        super(CustomUser, self).save(*args, **kwargs)

    # def image_img(self):
    #     if self.profilePicture:
    #         return u'<img src="%s"  height="100px"/>' % self.profilePicture
    #     else:
    #         return 'No_image'
    # image_img.short_description = 'Image'
    # image_img.allow_tags = True


# Two Vendor and Customer user models =========================================================

class Vendor(models.Model):
    # ,related_name='ven'
    id = models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    vendor = models.OneToOneField(CustomUser, on_delete=models.CASCADE, verbose_name='Email')
    vendorName = models.CharField(max_length=200, verbose_name='Name')
    phoneNumberRegex = RegexValidator(regex=r"^\+?1?\d{8,15}$")
    vendorContact = models.CharField(validators=[phoneNumberRegex], max_length=16, unique=False,blank=True,verbose_name='Contact')
    vendorGst = models.CharField(max_length=15, blank=True,verbose_name='GST No.')
    vendorAddress = models.TextField(blank=True, null=True, verbose_name='Address')
    vendorWalletBalance=models.DecimalField(default=0,max_digits=10, decimal_places=2,verbose_name='Wallet Balance',blank=True,null=True)
    # bankName,bankAcountName,bankAcountNumber,bankIFSCCode,bankSWIFTCode
    bankName=models.CharField(max_length=200, verbose_name='Bank Name',blank=True)
    bankAccountName=models.CharField(max_length=200, verbose_name='Account Name',blank=True)
    acountNumberRegex=RegexValidator(r'^\d{12,17}$','Account number must be between 12 and 17 digits.','invalid')
    bankAccountNumber=models.CharField(validators=[acountNumberRegex], max_length=17, unique=False,blank=True,verbose_name='Account number')
    bankIFSCCodeRegex=RegexValidator(r'^[A-Z]{4}0[A-Z0-9]{6}$','Account number must be length of 11.','invalid')
    bankIFSCCode=models.CharField(validators=[bankIFSCCodeRegex], max_length=11, unique=False,blank=True,verbose_name='IFSC Code')
    bankSWIFTCodeRegex=RegexValidator(r'^[A-Za-z]{4}[A-Za-z]{2}\w{2}(\w{3})?$', 'Invalid SWIFT code. Please enter a valid SWIFT code.', 'invalid')
    bankSWIFTCode=models.CharField(validators=[bankSWIFTCodeRegex],max_length=11,unique=False,blank=True,verbose_name='SWIFT Code')
    razorPayEmailId = models.EmailField(blank=True, verbose_name='RazorPay Email')
    payPalEmailId = models.EmailField(blank=True, verbose_name='PayPal Email')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Created at')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Updated at')

    # def __str__(self):
    #     return str(self.vendor)
    
    class Meta:
        verbose_name_plural = "Vendor's Profile"


class Customer(models.Model):
    id = models.UUIDField(primary_key=True,
                          default=uuid.uuid4,
                          editable=False)
    customer = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, verbose_name='Email')
    # related_name='cust',
    customerName = models.CharField(
        max_length=200, blank=True, null=True, verbose_name='Name')
    phoneNumberRegex = RegexValidator(regex=r"^\+?1?\d{8,15}$")
    customerContact = models.CharField(
        validators=[phoneNumberRegex], max_length=16, unique=False, verbose_name='Contact')
    customerAddress = models.TextField(
        blank=True, null=True, verbose_name='Address')
    customerWalletBalance=models.DecimalField(default=0,max_digits=10, decimal_places=2,verbose_name='Wallet Balance',blank=True,null=True)
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name='Created at')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Updated at')

    # def __str__(self):
    #     return str(self.customers)

class Admin(models.Model):
    id = models.UUIDField(primary_key=True,
                          default=uuid.uuid4,
                          editable=False)
    admin = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, verbose_name='Email')
    # related_name='cust',
    adminName = models.CharField(
        max_length=200, blank=True, null=True, verbose_name='Name')
    phoneNumberRegex = RegexValidator(regex=r"^\+?1?\d{8,15}$")
    adminContact = models.CharField(
        validators=[phoneNumberRegex], max_length=16, unique=False,blank=True,verbose_name='Contact')
    adminAddress = models.TextField(blank=True, null=True, verbose_name='Address')
    minimumWithdrawalAmount=models.DecimalField(default=0,max_digits=10, decimal_places=2,verbose_name='Minimun Withdrawal Amount',blank=True,null=True)
    adminWalletBalance=models.DecimalField(default=0,max_digits=10, decimal_places=2,verbose_name='Wallet Balance',blank=True,null=True)
    adminCommissionProfit=models.DecimalField(default=0,max_digits=10, decimal_places=2,verbose_name='Commission Profit',blank=True,null=True)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Created at')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Updated at')

    class Meta:
        verbose_name_plural = "Admin's Profile"


class TemporaryData(models.Model):
    id = models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    TemporaryDataByUser = models.ForeignKey(CustomUser,on_delete=models.CASCADE, verbose_name='User')
    otpNumber = models.CharField(max_length=50, blank=False, null=True)
    otpExpiryTime = models.DateTimeField(blank=True,null=True)
    
    def __str__(self):
        return str(self.TemporaryDataByUser) 
    
    class Meta:
        verbose_name_plural = 'Temporary Data'