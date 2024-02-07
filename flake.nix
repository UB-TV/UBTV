{
  description = "UBTV's dev environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11";
    nixpkgs-unstable.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs = {nixpkgs, ...} @ inputs: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {
      inherit system;
      overlays = [(import ./overlays.nix {inherit inputs;}).unstable-packages];
    };
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
