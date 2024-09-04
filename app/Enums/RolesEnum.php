<?php

namespace App\Enums;

enum RolesEnum: string
{
    case ADMIN = 'admin';
    case HEAD_OF_PROGRAM = 'head_of_program';
    case PRODUCER = 'producer';
    case CAMERAMAN = 'cameraman';
    case EDITOR = 'editor';
    case MCR = 'mcr';
}
