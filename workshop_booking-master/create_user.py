import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'workshop_portal.settings')
django.setup()

from django.contrib.auth.models import User
from workshop_app.models import Profile

username='ammy'
email='ammy@example.com'
password='ammy123'

# Create or get user
user, created = User.objects.get_or_create(username=username, defaults={'email': email})

# if it existed but without email, update email maybe
user.email = email
user.set_password(password)
user.save()

# Create or update profile
profile, p_created = Profile.objects.get_or_create(
    user=user, 
    defaults={
        'institute': 'IIT Bombay', 
        'department': 'computer engineering', 
        'phone_number': '1234567890', 
        'is_email_verified': True
    }
)

if not p_created:
    profile.is_email_verified = True
    profile.save()

print(f'User {username} {"created" if created else "updated"} successfully')
