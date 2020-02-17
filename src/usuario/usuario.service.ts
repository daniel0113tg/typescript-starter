import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Like, MoreThan, Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';


@Injectable()
export class UsuarioService{
  constructor(
    @InjectRepository(UsuarioEntity)
    private _repositorioUsuario: Repository<UsuarioEntity>
  ) {
  }
  crearUno(usuario: UsuarioEntity) {
    return this._repositorioUsuario
      .save(usuario);
  }

  borrarUno(id: number): Promise<DeleteResult> {
    return this._repositorioUsuario
      .delete(id);
  }

  actualizarUno(
    id: number,
    usuario: UsuarioEntity
  ): Promise<UsuarioEntity> {
    usuario.idUsuario = id;
    return this._repositorioUsuario
      .save(usuario);
  }

  buscar(
    where: any = {},
    skip: number = 0,
    take: number = 10,
    order: any = {
      idUsuario: 'DESC',
    }
  ): Promise<UsuarioEntity[]> {
    return this._repositorioUsuario
      .find({
        where: where,
        skip: skip,
        take: take,
        order: order,
      });
  }
  buscarUno(
    where: any = {}
  ): Promise<UsuarioEntity>{
    try {
      return this._repositorioUsuario.findOne({ where: where });
    }
    catch{
      return undefined;
    }

}

}
