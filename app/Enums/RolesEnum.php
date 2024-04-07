<?php
namespace App\Enums;

enum RolesEnum: string {

    case ADMIN = 'admin';
    case HEAD_OF_PROGRAM = 'head_of_program';
    case PRODUCER = 'producer';
    case CAMERAMAN = 'cameraman';
    case EDITOR = 'editor';
    case MCR = 'mcr';

    public function label(): string {
        return match ($this) {
            static::ADMIN => 'Admins',
            static::HEAD_OF_PROGRAM => 'Heads of Program',
            static::PRODUCER => 'Producers',
            static::CAMERAMAN => 'Cameramen',
            static::EDITOR => 'Editors',
            static::MCR => 'MCRs',
        };
    }
}
