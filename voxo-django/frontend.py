import numpy as np
from faker import Faker
import requests
import json
from product.models import ProBrand


fake = Faker()
ph = fake.numerify('##########')


for i in range(30):
    brandName= fake.name()
    ProBrand.objects.create(brandName=brandName)


