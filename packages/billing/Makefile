
DEFAULT_GOAL := help
help:
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z0-9_-]+:.*?##/ { printf "  \033[36m%-27s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

##@ [Macros] Make macros and aliases


.PHONY: build
build: format
	@pnpm run build


.PHONY: format
format:
	@pnpm run lint:fix && pnpm run format

.PHONY: unpublish
unpublish:
	@pnpm unpublish --force --registry https://dev.zumvida.com

.PHONY: publish
publish: build
	@pnpm publish --no-git-checks --registry https://dev.zumvida.com

.PHONY: fresh-publish
fresh-publish: build unpublish publish
