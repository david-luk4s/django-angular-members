from django.db import models

# Create your models here.
class Member(models.Model):
    name = models.CharField('Nome', max_length=100)
    surname = models.CharField('Sobrenome', max_length=100, null=True, blank=True)
    phone = models.CharField('Telefone', max_length=100, null=True, blank=True)
    email = models.EmailField('E-mail', max_length=100)
    address = models.CharField('Endereço', max_length=200)
    photo = models.ImageField(upload_to='members_profile')

    def __str__(self):
        return self.name + ' ' + self.surname