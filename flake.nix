{
  description = "UBTV's dev environment";

  inputs = {
    nixpkgs.url = "github.com:NixOS/nixpkgs/nixos-23.11";
    nixpkgs-unstable.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs = {
    self,
    nixpkgs,
    ...
  } @ inputs: let
    system = "x86_64-linux";

    nixpkgs = {
      overlays = [(import ./overlays.nix {inherit inputs;}).unstable-packages];
    };

    pkgs = import nixpkgs {inherit system;};
  in {
    devShells.${system}.default = pkgs.mkShell {
      packages = with pkgs; [
        php83
        php83Packages.composer
        unstable.nodejs_20
      ];
    };
  };
}
