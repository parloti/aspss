import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { NestedSpyObj } from './nested-spy-obj';
import { spyOnSpyObjProp } from './spy-on-spy-obj-prop';

export abstract class SpyAgency {
  public static activatedRoute(): NestedSpyObj<ActivatedRoute> {
    const spy = jasmine.createSpyObj<ActivatedRoute>(
      'ActivatedRoute',
      [],
      ['paramMap', 'queryParamMap']
    );

    spyOnSpyObjProp(spy, 'paramMap').and.returnValue(of(this.paramMap()));
    spyOnSpyObjProp(spy, 'queryParamMap').and.returnValue(of(this.paramMap()));

    return spy as NestedSpyObj<ActivatedRoute>;
  }

  public static activatedRouteSnapshot(): NestedSpyObj<ActivatedRouteSnapshot> {
    const spy = jasmine.createSpyObj<ActivatedRouteSnapshot>(
      'ActivatedRouteSnapshot',
      [],
      ['queryParamMap']
    );

    spyOnSpyObjProp(spy, 'queryParamMap').and.returnValue(this.paramMap());

    return spy as NestedSpyObj<ActivatedRouteSnapshot>;
  }

  public static httpClient() {
    return jasmine.createSpyObj<HttpClient>('HttpClient', ['get', 'post']);
  }

  public static matDialog(): jasmine.SpyObj<MatDialog> {
    return jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);
  }

  public static matDialogRef<T, R = any>(): jasmine.SpyObj<MatDialogRef<T, R>> {
    return jasmine.createSpyObj<MatDialogRef<T, R>>('MatDialogRef', [
      'afterClosed',
      'close',
    ]);
  }

  public static matTable<T>(): jasmine.SpyObj<MatTable<T>> {
    return jasmine.createSpyObj<MatTable<T>>('MatTable', ['addColumnDef']);
  }


  public static paramMap(): jasmine.SpyObj<ParamMap> {
    const spy = jasmine.createSpyObj<ParamMap>('ParamMap', ['get'], []);
    return spy;
  }
  public static router() {
    return jasmine.createSpyObj<Router>('Router', [
      'navigate',
      'parseUrl',
      'navigateByUrl',
    ]);
  }

  public static routerStateSnapshot(): NestedSpyObj<RouterStateSnapshot> {
    const activatedRouteSnapshot = this.activatedRouteSnapshot();

    return (activatedRouteSnapshot as unknown) as NestedSpyObj<
      RouterStateSnapshot
    >;
  }

}
