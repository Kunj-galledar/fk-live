from django.apps import AppConfig


class VoxoappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'voxoapp'
    verbose_name='Site settings'
  
    def ready(self):
        import voxoapp.signals
