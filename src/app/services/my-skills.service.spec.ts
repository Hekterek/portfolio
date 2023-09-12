/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MySkillsService } from './my-skills.service';

describe('Service: MySkills', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MySkillsService]
    });
  });

  it('should ...', inject([MySkillsService], (service: MySkillsService) => {
    expect(service).toBeTruthy();
  }));
});
