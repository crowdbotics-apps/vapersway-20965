from django.contrib import admin
from .models import Country, Category, ItemVariant, Review, Item

admin.site.register(Item)
admin.site.register(ItemVariant)
admin.site.register(Review)
admin.site.register(Country)
admin.site.register(Category)

# Register your models here.
