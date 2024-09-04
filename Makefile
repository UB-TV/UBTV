.PHONY: cleanup
cleanup:
	@php artisan cache:clear
	@php artisan config:clear
	@php artisan event:clear
	@php artisan optimize:clear
